import DiyGuideArticle from "../../components/DiyGuideArticle";
import { getDiyGuide } from "../../data/diyGuides";
import { withPageSocial } from "../../siteOpenGraph";

const g = getDiyGuide("entrance-cleaning");

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/entrance-cleaning/" },
  title: g.title,
  description: g.description,
});

export default function Page() {
  return <DiyGuideArticle g={g} />;
}
