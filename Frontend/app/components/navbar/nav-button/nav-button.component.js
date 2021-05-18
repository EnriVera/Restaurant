import { useState } from "react";
import Link from 'next/link'
const {
  ArticleNavButton,
  A,
  Icon
} = require("./styles/nav-button.styles");
export default function NavButton({ title, icon }) {
  return (
    <>
      <ArticleNavButton>
        <Link href={`/${title.toLowerCase()}`}>
          <A>
            <Icon icon={icon} size={12} />
            <h5>{title}</h5>
          </A>
        </Link>
      </ArticleNavButton>
    </>
  );
}
