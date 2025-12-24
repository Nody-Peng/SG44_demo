import React from "react";
import { Mail, Phone, FileText } from "lucide-react";
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

                {/* 行動按鈕區 */}
                <div className="mt-8 p-6 bg-[#F8FAF9] rounded-lg border border-[#E2E8E4] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#5F7161] rounded text-white">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">
                        籌備會報名表單
                      </p>
                      <p className="text-xs text-stone-500">
                        請於114年12月26日(星期五)中午12時前完成
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
              </div>

              {/* 聯絡資訊 */}
              <div className="bg-stone-50 px-6 md:px-8 py-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Mail size={14} className="text-[#869D85]" />
                  <span>sg44@nccu.edu.tw</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Phone size={14} className="text-[#869D85]" />
                  <span>02-29393091 分機 50641</span>
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
