import { FeceBook } from "../../image/svg/FaceBook";
import { Instagram } from "../../image/svg/Instagram";
import { Twitch } from "../../image/svg/Twitch";
import { Twitter } from "../../image/svg/Twitter";
import { Vk } from "../../image/svg/Vk";
import { YouTube } from "../../image/svg/YouTube";
import "./SocialBlock.css";

export const SocialBlock = () => {
  return (
    <ul className="SocialList">
      <li>
        <a href="https://www.youtube.com/" rel="noopener" aria-label="Ютуб">
          <YouTube />
        </a>
      </li>
      <li>
        <a
          href="https://www.vk.com/"
          rel="noopener"
          aria-label="Хрень ФСБешная"
        >
          <Vk />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/" rel="noopener" aria-label="Фейсбук">
          <FeceBook />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/" rel="noopener" aria-label="Твитер">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.twitch.com/" rel="noopener" aria-label="Твичь">
          <Twitch />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          rel="noopener"
          aria-label="Инстаграм"
        >
          <Instagram />
        </a>
      </li>
    </ul>
  );
};
