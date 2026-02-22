import React, { useState, useEffect } from 'react';
import { Search, Trash2, Edit, Save, X, User } from 'lucide-react';
import api from '../../utils/api';
import '../DashboardOverview.css';
import './Admin.css';
import Pagination from '../../components/Pagination';

const AdminTeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const roles = ['TEACHER', 'MENTOR', 'HOD'];
            const promises = roles.map(role => api.get(`/users/role/${role}`).catch(() => ({ data: [] })));
            const results = await Promise.all(promises);
            const allTeachers = results.flatMap(r => r.data);
            const unique = Array.from(new Map(allTeachers.map(u => [u.id || u.firebaseUid, u])).values());
            setTeachers(unique);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (uid) => {
        if (!window.confirm('Are you sure you want to permanently delete this teacher?')) return;
        try {
            await api.delete(`/users/${uid}`);
            setTeachers(teachers.filter(u => u.firebaseUid !== uid));
        } catch (err) {
            alert('Failed to delete: ' + err.message);
        }
    };

    const handleEditStart = (user) => setEditUser({ ...user });

    const handleEditSave = async () => {
        try {
            await api.put(`/users/${editUser.firebaseUid}`, editUser);
            setTeachers(teachers.map(u => u.firebaseUid === editUser.firebaseUid ? editUser : u));
            setEditUser(null);
        } catch (err) {
            alert('Failed to update: ' + err.message);
        }
    };

    const filtered = teachers.filter(u =>
        (u.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (u.email || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className="dashboard-layout-new">
            <div className="dashboard-main-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div className="loading-spinner"></div>
            </div>
        </div>
    );

    return (
        <div className="dashboard-layout-new">
            <div className="dashboard-main-col">
                <div className="dash-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3>Teacher Management</h3>
                        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '12px' }}>
                            <Search size={18} color="var(--text-secondary)" />
                            <input
                                type="text"
                                placeholder="Search teachers..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', marginLeft: '10px', outline: 'none' }}
                            />
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-primary)' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                                    <th style={{ padding: '12px' }}>Name</th>
                                    <th style={{ padding: '12px' }}>Role</th>
                                    <th style={{ padding: '12px' }}>Email</th>
                                    <th style={{ padding: '12px' }}>Department</th>
                                    <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered
                                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                    .map(user => (
                                        <tr key={user.id || user.firebaseUid} className="admin-table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '12px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <div className="user-avatar-small">
                                                        {user.fullName ? user.fullName.charAt(0).toUpperCase() : <User size={14} />}
                                                    </div>
                                                    {editUser && editUser.id === user.id ? (
                                                        <input
                                                            value={editUser.fullName}
                                                            onChange={e => setEditUser({ ...editUser, fullName: e.target.value })}
                                                            className="form-input"
                                                            style={{ padding: '6px 10px' }}
                                                        />
                                                    ) : (
                                                        <span style={{ fontWeight: 500 }}>{user.fullName}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <span className={`admin-badge ${(user.role || '').toLowerCase()}`}>{user.role}</span>
                                            </td>
                                            <td style={{ padding: '12px', opacity: 0.8 }}>{user.email}</td>
                                            <td style={{ padding: '12px', opacity: 0.8 }}>{user.department || '—'}</td>
                                            <td style={{ padding: '12px', textAlign: 'right' }}>
                                                {editUser && editUser.id === user.id ? (
                                                    <>
                                                        <button onClick={handleEditSave} className="icon-btn admin-action-btn" style={{ color: '#10b981', marginRight: '8px' }}><Save size={18} /></button>
                                                        <button onClick={() => setEditUser(null)} className="icon-btn admin-action-btn" style={{ color: '#ef4444' }}><X size={18} /></button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={() => handleEditStart(user)} className="icon-btn admin-action-btn" style={{ color: '#6366f1', marginRight: '8px' }}><Edit size={18} /></button>
                                                        <button onClick={() => handleDelete(user.firebaseUid)} className="icon-btn admin-action-btn" style={{ color: '#ef4444' }}><Trash2 size={18} /></button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filtered.length / itemsPerPage)}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminTeacherList;
