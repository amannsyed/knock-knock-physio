
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 scroll-mt-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pricing Packages & Offers</h2>
          <p className="text-secondary mt-4">Transparent pricing for your peace of mind.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Standard Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🇬🇧</span>
                        <h3 className="text-xl font-bold text-gray-800">Home Physiotherapy Pricing</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="border-b border-gray-200 pb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-semibold text-lg text-gray-800">Initial Assessment & Treatment</h4>
                                <span className="text-xl font-bold text-primary">£70</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                60 minutes
                            </div>
                            <p className="text-gray-600 text-sm">Full physical assessment, diagnosis, hands-on treatment & exercise plan.</p>
                        </div>
                        
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-semibold text-lg text-gray-800">Follow-Up Treatment Sessions</h4>
                                <span className="text-xl font-bold text-primary">£55</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                45 minutes
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">👴</span>
                        <h3 className="text-xl font-bold text-gray-800">Elderly Care Programs</h3>
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-semibold text-lg text-gray-800">Gentle Rehabilitation Program</h4>
                            <span className="text-xl font-bold text-primary">£50 <span className="text-sm font-normal text-gray-500">/ visit</span></span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            45 minutes
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Optional ongoing monthly care packages available.
                        </div>
                    </div>
                </div>
            </div>

            {/* Discounted Packages */}
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">📦</span>
                    <h3 className="text-xl font-bold text-gray-800">Discounted Packages</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Starter Recovery Plan", sessions: "3 sessions", price: "£150", save: "save £15" },
                        { name: "Mobility Improvement Plan", sessions: "5 sessions", price: "£240", save: "save £35" },
                        { name: "Complete Rehab Program", sessions: "10 sessions", price: "£450", save: "save £100" }
                    ].map((pkg, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h4 className="font-bold text-gray-800 mb-1">{pkg.name}</h4>
                            <p className="text-sm text-gray-500 mb-3">{pkg.sessions}</p>
                            <div className="text-2xl font-bold text-primary mb-1">{pkg.price}</div>
                            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase">
                                {pkg.save}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Special Offers */}
            <div className="bg-accent/10 rounded-xl p-8 border border-accent/20">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🌟</span>
                    <h3 className="text-xl font-bold text-gray-800">Special Offers</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 items-start">
                         <div className="bg-white p-2 rounded-lg shadow-sm text-2xl">🎉</div>
                         <div>
                             <h4 className="font-bold text-gray-800">New Patient Discount</h4>
                             <p className="text-gray-600 text-sm mt-1">
                                 <span className="font-bold text-accent">£10 OFF</span> your first session
                             </p>
                         </div>
                    </div>
                    <div className="flex gap-4 items-start">
                         <div className="bg-white p-2 rounded-lg shadow-sm text-2xl">👨‍👩‍👧‍👦</div>
                         <div>
                             <h4 className="font-bold text-gray-800">Family Referral Offer</h4>
                             <p className="text-gray-600 text-sm mt-1">
                                 Refer a friend & both get <span className="font-bold text-accent">£10 OFF</span> your next visit
                             </p>
                         </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-sm text-gray-400 italic">
                Prices may vary depending on distance and specialised therapy requirements.
            </p>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
