import DiyGuideArticle from "../../components/DiyGuideArticle";
import { getDiyGuide } from "../../data/diyGuides";
import { withPageSocial } from "../../siteOpenGraph";

const g = getDiyGuide("bath-floor-black-stains");

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/bath-floor-black-stains/" },
  title: g.title,
  description: g.description,
});

export default function Page() {
  return <DiyGuideArticle g={g} />;
}
