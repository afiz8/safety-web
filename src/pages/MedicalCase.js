import React from 'react';
import IncidentalTreatment from '../components/IncidentalTreatment';

const MedicalCase = () => (
  <div className="p-6 md:p-8 max-w-4xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
        Medical Case
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed">
        Laporkan kasus medical treatment dan first aid dengan form lengkap
      </p>
    </div>
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
      <IncidentalTreatment />
    </div>
  </div>
);

export default MedicalCase;

