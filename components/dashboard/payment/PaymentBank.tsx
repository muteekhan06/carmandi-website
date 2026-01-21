"use client";

import React, { useState } from "react";

export const PaymentBank = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    return (
        <div className="space-y-6">
            <h3 className="text-[16px] font-normal text-[#1F1F1F]">Bank Account Details</h3>
            <div className="bg-[#F9FAFB] rounded-[12px] p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <p className="text-[12px] text-[#757575] font-normal mb-1">Bank Name</p>
                        <p className="text-[16px] text-[#1F1F1F] font-semibold">Carmandi Bank Ltd.</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#757575] font-normal mb-1">Account Name</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[16px] text-[#1F1F1F] font-semibold">12483940924242</p>
                            <button onClick={() => navigator.clipboard.writeText("12483940924242")} className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path opacity="0.4" d="M4.86722 9.74997C3.69571 9.74997 2.74219 8.79645 2.74219 7.62494V2.5H1.86722C1.1087 2.5 0.492188 3.11642 0.492188 3.87494V10.6249C0.492188 11.3835 1.1087 12 1.86722 12H8.11716C8.87567 12 9.49219 11.3835 9.49219 10.6249V9.74997H4.86722Z" fill="#136BCF" /><path d="M11.4922 1.37503C11.4922 0.615509 10.8766 0 10.1172 0H4.86722C4.1077 0 3.49219 0.615509 3.49219 1.37503V7.62497C3.49219 8.38449 4.1077 9 4.86722 9H10.1172C10.8766 9 11.4922 8.38449 11.4922 7.62497V1.37503Z" fill="#136BCF" /></svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#757575] font-normal mb-1">Account Title</p>
                        <p className="text-[16px] text-[#1F1F1F] font-semibold">Carmandi Pvt Ltd.</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#757575] font-normal mb-1">IBAN</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[16px] text-[#1F1F1F] font-semibold">PK12CARM1234567890001</p>
                            <button onClick={() => navigator.clipboard.writeText("PK12CARM1234567890001")} className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path opacity="0.4" d="M4.86722 9.74997C3.69571 9.74997 2.74219 8.79645 2.74219 7.62494V2.5H1.86722C1.1087 2.5 0.492188 3.11642 0.492188 3.87494V10.6249C0.492188 11.3835 1.1087 12 1.86722 12H8.11716C8.87567 12 9.49219 11.3835 9.49219 10.6249V9.74997H4.86722Z" fill="#136BCF" /><path d="M11.4922 1.37503C11.4922 0.615509 10.8766 0 10.1172 0H4.86722C4.1077 0 3.49219 0.615509 3.49219 1.37503V7.62497C3.49219 8.38449 4.1077 9 4.86722 9H10.1172C10.8766 9 11.4922 8.38449 11.4922 7.62497V1.37503Z" fill="#136BCF" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-dashed border-[#8EBFF0] rounded-[12px] p-6">
                <h3 className="text-[16px] font-normal text-[#383838] mb-4">Upload Proof of Bank Transfer</h3>
                <input type="file" id="receipt-upload-dashboard" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" />
                <label htmlFor="receipt-upload-dashboard" className="w-full h-[52px] bg-[#F5FAFF] hover:bg-[#EBF5FF] text-[#136BCF] rounded-[10px] font-medium text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                    {uploadedFile ? uploadedFile.name : "Upload Receipt"}
                </label>
            </div>
            <div className="flex justify-end pt-4">
                <button className="w-[180px] h-[52px] bg-[#153481] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#0E2356] transition-colors">Add</button>
            </div>
        </div>
    );
};
