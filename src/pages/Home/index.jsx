import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Profile from "../../components/Profile";
import image from "../../assets/me.png";

export default function Home() {
  const [ width, setWidth ] = useState(
    typeof window !== "undefined"
      ? window.innerWidth
      : 0
  );

  const classes = makeStyles({
    container: {
      display: "inline-block",
      textAlign: "center",
      padding: "0 0.5em",
      "@media (min-width: 816px)": {
        textAlign: "left",
        padding: "0"
      }
    },
    social: {
      display: "block",
      marginTop: "1.25em"
    }
  })();

  const socialMedia = [
    {
      name: "Email",
      url: "mailto:marcusfranco98@gmail.com"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rasfmar"
    },
    {
      name: "GitHub",
      url: "https://github.com/rasfmar"
    },
    {
      name: "Bookshelf",
      url: "https://bookshelf.website/rasfmar"
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined")
      return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  });
  
  return (
    <div className={classes.container}>
      <Profile image={image} alt="Marcus Franco">
        <h2>
          <span
            role="img"
            aria-label="waving hand emoji"
            data-sal="slide-down"
            data-sal-delay="0"
            data-sal-duration="1200"
          >👋</span>
          {" Marcus Franco".split("").map((c, i) => (
            <span
              data-sal="slide-down"
              data-sal-delay={50 + 50 * i}
              data-sal-duration="1200"
            >{c}</span>
          ))}
        </h2>
        <p
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="800"
        >Hi! I'm an 18-year-old software engineer interested in humanitarianism.</p>
        {socialMedia.map((s, i) => (
          <>
            <OutboundLink
              href={s.url}
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
            >{s.name}</OutboundLink>
            {i === socialMedia.length - 1 || (
              width >= 576 ? (
                <span
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-duration="800"
                > — </span>
              ) : (
                <br />
              )
            )}
          </>
        ))}
      </Profile>
    </div>
  )
}
