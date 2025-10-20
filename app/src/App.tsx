import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import AdminLayout from './layout/AdminLayout';
import UsersPage from './pages/UsersPage';
import DistrictsPage from './pages/DistrictsPage';
import UnitsPage from './pages/UnitsPage';
import BuildingsPage from './pages/BuildingsPage';
import ChecklistsPage from './pages/ChecklistsPage';
import InspectorsPage from './pages/InspectorsPage';
import DistrictEditPage from './pages/DistrictEditPage';
import UnitEditPage from './pages/UnitEditPage';
import BuildingAddPage from './pages/BuildingAddPage';
import BuildingEditPage from './pages/BuildingEditPage';
import ChecklistAddPage from './pages/ChecklistAddPage';
import ChecklistEditPage from './pages/ChecklistEditPage';
import TasksPage from './pages/TasksPage';
import InspectorTaskPage from './pages/InspectorTaskPage';
import AnalyticsPage from './pages/AnalyticsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<AdminLayout />}> 
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/districts" element={<DistrictsPage />} />
        <Route path="/admin/districts/:id/edit" element={<DistrictEditPage />} />
        <Route path="/admin/units" element={<UnitsPage />} />
        <Route path="/admin/units/:id/edit" element={<UnitEditPage />} />
        <Route path="/admin/buildings" element={<BuildingsPage />} />
        <Route path="/admin/buildings/add" element={<BuildingAddPage />} />
        <Route path="/admin/buildings/:id/edit" element={<BuildingEditPage />} />
        <Route path="/admin/checklists" element={<ChecklistsPage />} />
        <Route path="/admin/checklists/add" element={<ChecklistAddPage />} />
        <Route path="/admin/checklists/:id/edit" element={<ChecklistEditPage />} />
        <Route path="/admin/inspectors" element={<InspectorsPage />} />
        <Route path="/admin/tasks" element={<TasksPage />} />
        <Route path="/admin/analytics" element={<AnalyticsPage />} />
      </Route>

      <Route path="/inspector/tasks/:id" element={<InspectorTaskPage />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}


