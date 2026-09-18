import { createFileRoute } from "@tanstack/react-router";
import { RestaurantHero } from "@/components/restaurant-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[BRAND] | إدارة المطاعم بوضوح" },
      { name: "description", content: "نظام عربي لإدارة المخزون والوصفات والمطبخ المركزي والمشتريات لكل فروع مطعمك." },
      { property: "og:title", content: "[BRAND] | إدارة المطاعم بوضوح" },
      { property: "og:description", content: "اعرف وين يروح كل ريال في مطبخك مع منصة إدارة مطاعم عربية متكاملة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <RestaurantHero />;
}
