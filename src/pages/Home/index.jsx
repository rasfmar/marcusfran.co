import React from "react"
import styles from "./styles";
import Profile from "../../components/Profile";
import image from "../../assets/grad.png";

export default function Home() {
  const classes = styles();
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
      url: "https://github.com/in/rasfmar"
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
            <a
              href={s.url}
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
            >{s.name}</a>
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
