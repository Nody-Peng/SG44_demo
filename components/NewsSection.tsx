import React from "react";
import { Mail, Phone, FileText, Video } from "lucide-react";
import { NEWS_DATA } from "../constants";
import SectionTitle from "./SectionTitle";

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="最新消息" subtitle="News & Announcements" />

        <div className="space-y-8">
          {NEWS_DATA.map((news) => (
            <article
              key={news.id}
              className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden"
            >
              {/* 標題區 */}
              <div className="bg-[#F8FAF9] border-b border-stone-200 px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase text-[#5F7161] bg-white px-2 py-1 rounded tracking-widest">
                    {news.category}
                  </span>
                  <span className="text-xs text-stone-400 font-mono tracking-tighter">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {news.title}
                </h3>
              </div>

              {/* 內容區 */}
              <div className="p-6 md:p-8">
                <div className="prose prose-stone max-w-none">
                  <div className="whitespace-pre-wrap text-stone-700 leading-relaxed text-sm md:text-base">
                    {news.content}
                  </div>
                </div>

                {/* === 公告附件下載（PDF） === */}
                <div className="mt-8 mb-6 p-4 border border-stone-200 rounded-md bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-100 rounded text-[#5F7161]">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">
                        會議正式公文
                      </p>
                    </div>
                  </div>

                  <a
                    href="/會議正式公文.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#5F7161] hover:underline"
                  >
                    下載 PDF
                  </a>
                </div>

                {/* ❌ 隱藏報名表單區塊 */}
                {/* 
                <div className="p-6 bg-[#F8FAF9] rounded-lg border border-[#E2E8E4] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#5F7161] rounded text-white">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">
                        籌備會報名表單
                      </p>
                      <p className="text-xs text-stone-500">
                        請於114年12月26日(星期五)中午17時前完成
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://forms.gle/b5ZzPh7sxNj1S5G67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5F7161] text-white px-8 py-2.5 rounded shadow-sm hover:bg-[#4a584b] transition-colors font-bold text-sm"
                  >
                    前往填寫 Google 表單
                  </a>
                </div>
                */}

                {/* === 會議連結區塊（條件顯示，改為與報名表單相同格式） === */}
                {news.meetingLink && (
                  <div className="p-6 bg-[#F8FAF9] rounded-lg border border-[#E2E8E4] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#869D85] rounded text-white">
                        <Video size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-800">
                          線上視訊會議連結
                        </p>
                        <p className="text-xs text-stone-500">
                          {news.meetingTime || "會議時間請見公告內容"}
                        </p>
                      </div>
                    </div>
                    <a
                      href={news.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#869D85] text-white px-8 py-2.5 rounded shadow-sm hover:bg-[#6b7d6a] transition-colors font-bold text-sm"
                    >
                      {news.meetingLinkText || "加入會議"}
                    </a>
                  </div>
                )}
              </div>

              {/* 聯絡資訊（可點擊） */}
              <div className="bg-stone-50 px-6 md:px-8 py-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Mail size={14} className="text-[#869D85]" />
                  <a href="mailto:sg44@nccu.edu.tw" className="hover:underline">
                    sg44@nccu.edu.tw
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Phone size={14} className="text-[#869D85]" />
                  <a href="tel:+886229393091" className="hover:underline">
                    02-2939-3091 分機 50641
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
