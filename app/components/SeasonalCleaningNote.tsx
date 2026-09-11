// 年末大掃除の先回り節(2026-09-11設置)。GSCで「大掃除業者×地域」クエリが観測された地域ページに限定して表示
export default function SeasonalCleaningNote() {
  return (
    <section className="py-10 bg-amber-50 border-y border-amber-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          年末の大掃除をプロに頼むなら、予約は10〜11月が確実です
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
          ハウスクリーニング業者の予約は、大掃除シーズンの12月に集中しやすく、希望日が埋まってしまうことがあります。年末に依頼を考えている場合は、10〜11月のうちに候補の店舗へ問い合わせておくと、日程の選択肢を確保しやすくなります。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
          「どこまで自分でやり、どこからプロに任せるか」の切り分けや、依頼先の選び方は年末大掃除ガイドにまとめています。このページの店舗一覧から、お住まいの地域の対応店舗を確認したうえで、早めの問い合わせをおすすめします。
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
