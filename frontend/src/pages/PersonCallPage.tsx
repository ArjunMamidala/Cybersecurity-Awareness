import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

type Person = { id: string; name: string; role: string };

export default function PersonCallPage() {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state?.person as Person | undefined;

  const [activeTab, setActiveTab] = useState<'overview' | 'metrics'>('overview');

  if (!person) {
    return (
      <div>
        <p className="text-gray-500">No person selected.</p>
        <button
          type="button"
          onClick={() => navigate('/people')}
          className="mt-4 px-4 py-2 text-blue-600 hover:underline"
        >
          ← Back to People
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate('/people')}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to People
      </button>

      {/* Person name header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{person.name}</h1>

      {/* Sub-nav: Overview | Metrics */}
      <nav className="border-b border-gray-200 mb-6">
        <div className="flex gap-8">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 font-medium border-b-2 -mb-px transition ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('metrics')}
            className={`pb-3 font-medium border-b-2 -mb-px transition ${
              activeTab === 'metrics'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Metrics
          </button>
        </div>
      </nav>

      {/* Main content */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">Name</h2>
              <p className="text-gray-900">{person.name}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">Role</h2>
              <p className="text-gray-900">{person.role}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">ID</h2>
              <p className="text-gray-900 font-mono text-sm">{person.id}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">Status</h2>
              <p className="text-gray-900">Active</p>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <button
              type="button"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              onClick={() => alert(`Call ${person.name} (mock)`)}
            >
              Call
            </button>
          </div>
        </div>
      )}

      {activeTab === 'metrics' && (
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Metrics for {person.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Simulations completed</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Average score</p>
              <p className="text-2xl font-bold text-gray-900">—</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Last activity</p>
              <p className="text-2xl font-bold text-gray-900">—</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}