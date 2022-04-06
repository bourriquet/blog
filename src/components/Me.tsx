import * as React from "react"

const Me = () => {
  return (
    <div className="content">
      <div className="content-box box standard-content me">
        <div className="standard-content me">
          <div className="me-image">
            <img width="90%" src="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/sidebar_image.jpeg" />
          </div>
          <p>
            Hi! I'm Lauren. This blog is primarily a dumping ground for me to
            write about places I've been to, fun things I've done, books I've read
            and perhaps even some tech along the way.
          </p>
          <p>
            I'm a software engineer, currently working as a back-end engineer
            for <a href="https://octopusenergy.group/kraken-technologies" target="_blank">Kraken Technologies/Octopus Energy</a>.
            I primarily work with Python/Django now, but have worked with all
            sorts of languages/frameworks over the years.
          </p>
          <p>
            I've built this blog from scratch, but it is very much a work in
            progress, so please do <a href = "mailto: laurenanders92@gmail.com">reach out</a> if
            something isn't working quite right!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Me;
