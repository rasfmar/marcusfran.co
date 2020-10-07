import React from "react"
import { makeStyles } from "@material-ui/styles";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Profile from "../../components/Profile";
import image from "../../assets/grad.png";

export default function Home() {
  const classes = makeStyles({
    container: {
      display: "inline-block",
      textAlign: "center",
      padding: "0 0.5em",
      "@media (min-width: 789px)": {
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
      url: "mailto:m6franco@ucsd.edu"
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
        >Hi. I'm 18-year-old software engineer interested in humanitarianism.</p>
        {socialMedia.map((s, i) => (
          <>
            <OutboundLink
              href={s.url}
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
            >{s.name}</OutboundLink>
            {i === socialMedia.length - 1 || (
              <span
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="800"
              > — </span>
            )}
          </>
        ))}
      </Profile>
    </div>
  )
}
