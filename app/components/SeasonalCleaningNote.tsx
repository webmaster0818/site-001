// 年末大掃除の先回り節(2026-09-11設置)。GSCで「大掃除業者×地域」クエリが観測された地域ページに限定して表示
export default function SeasonalCleaningNote() {
  return (
    <section className="py-10 bg-amber-50 border-y border-amber-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          年末の大掃除をプロに依頼する場合は、10〜11月のご予約をおすすめします
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
          ハウスクリーニング業者の予約は、大掃除シーズンの12月に集中しやすく、希望日の予約が取りにくくなる場合があります。年末の依頼をご検討の場合は、10〜11月のうちに候補の店舗へお問い合わせいただくと、日程を選びやすくなります。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
          ご自身で行う範囲とプロに依頼する範囲の分け方や、依頼先の選び方は、年末大掃除ガイドでご説明しています。このページの店舗一覧でお住まいの地域の対応店舗をご確認のうえ、早めのお問い合わせをおすすめします。
        </p>
        <a
          href="/scene/year-end-package/"
          className="inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-700 transition"
        >
          年末大掃除ガイドを見る
        </a>
      </div>
    </section>
  );
}
