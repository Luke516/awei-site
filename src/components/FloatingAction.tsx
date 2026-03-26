import React from "react";
import { Phone, MessageCircle, Share2 } from "lucide-react";

export const FloatingAction: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Right Action Bar */}
      <div className="new-landing hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl flex-col items-center border border-gray-100 z-50">
        <div className="new-landing p-3 border-b border-gray-100 text-center bg-cream/50">
          <p className="new-landing text-[10px] text-muted mb-1">
            掃描 QR Code
          </p>
          <p className="new-landing text-xs font-bold text-navy">加入好友</p>
          <div className="new-landing w-20 h-20 bg-gray-200 mt-2 mx-auto flex items-center justify-center text-xs text-gray-400">
            QR
          </div>
        </div>

        <div className="new-landing flex flex-col w-full">
          <a
            href="#"
            className="new-landing p-3 flex items-center justify-center hover:bg-cream transition-colors border-b border-gray-100 text-[#00B900]"
            title="LINE"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="#"
            className="new-landing p-3 flex items-center justify-center hover:bg-cream transition-colors border-b border-gray-100 text-blue-600"
            title="Facebook"
          >
            <Share2 size={20} />
          </a>
          <a
            href="tel:0987817916"
            className="new-landing p-3 flex items-center justify-center hover:bg-cream transition-colors text-navy"
            title="Call"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="new-landing lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-gray-100 z-50 flex justify-around items-center h-16 px-4 pb-safe">
        <a
          href="#"
          className="new-landing flex flex-col items-center justify-center text-[#00B900] w-1/3"
        >
          <MessageCircle size={20} />
          <span className="new-landing text-[10px] mt-1 font-bold">
            LINE諮詢
          </span>
        </a>
        <a
          href="tel:0987817916"
          className="new-landing flex flex-col items-center justify-center text-navy w-1/3 border-x border-gray-100"
        >
          <Phone size={20} />
          <span className="new-landing text-[10px] mt-1 font-bold">
            撥打電話
          </span>
        </a>
        <a
          href="#"
          className="new-landing flex flex-col items-center justify-center text-blue-600 w-1/3"
        >
          <Share2 size={20} />
          <span className="new-landing text-[10px] mt-1 font-bold">
            分享專頁
          </span>
        </a>
      </div>
    </>
  );
};
