import * as React from "react"
import PostImageSingle from "../PostImageSingle"

const PostContent = (props) => {
  return (
    <>
      <p>
        <em>Transferred from my old Year Abroad blog.</em>
      </p>
      <p>
        At the start of the summer, I moved to Great Malvern from London at the
        end of my second year of uni to start a nine-week summer internship
        at <a href="https://www.zxlidars.com/" target="_blank">ZephIR Lidar</a>.
        Yesterday was my last day!
      </p>

      <p>
        The last couple of weeks of my internship were really fun, with a leaving
        meal and drinks with my colleagues. There was even a sheep
        invasion on one of my last days! The office (a converted barn) is in the
        middle of farmland, so being late to work because cows are blocking the
        road is not uncommon. I was working away when I heard some <em>baa</em>ing,
        so I looked out of the window and there were some sheep outside trotting
        down the road to the office, having the time of their lives. The security
        gate was broken due to a lightning strike, but I'd like to think that
        they came to say goodbye to me.
      </p>

      <p>
        <PostImageSingle
          caption="Just your typical cow jam on the way to the office"
          image="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/87b88cb7-3d1e-4fb5-aef7-9d30ffa39347_1"
        />
      </p>

      <p>
        <PostImageSingle
          caption="Sheep trying to get a job at ZephIR Lidar"
          image="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/87b88cb7-3d1e-4fb5-aef7-9d30ffa39347_2"
          portrait
        />
      </p>

      <p>
        <PostImageSingle
          caption="Walking home through Great Malvern after some leaving drinks"
          image="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/87b88cb7-3d1e-4fb5-aef7-9d30ffa39347_cover"
        />
      </p>

      <p>
        After a long drive to Merseyside, I have a few days at home
        before moving to Utrecht for my year abroad. I managed to pack a large
        suitcase, a small suitcase, a 35L rucksack and a few shopping bags with
        everything I’d amassed in Malvern, and that was only from nine weeks
        away. I’m expecting to go to the Netherlands for a year with only one
        23kg suitcase!
      </p>

      <p>
        It was bittersweet to be leaving Great Malvern - I’ve really enjoyed my
        internship at ZephIR Lidar and Malvern is a lovely place, but I am
        raring to start my year abroad now. I recovered today with an eleven
        hour sleep and my first day of doing nothing productive in over two
        months. Time off won’t last forever though, as I have only four days
        before I leave for Utrecht, with family to see, last minute preparations
        to do and all of that dreaded packing.
      </p>

      <p>
        I had a small leaving/early 21st birthday party with family and friends
        in Liverpool at the weekend. A few of my uni friends came up from
        London, so I showed them the delights of Popworld. Overall, an excellent
        send off.
      </p>

      <p>
        <PostImageSingle
          caption="Leaving party in Liverpool"
          image="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/87b88cb7-3d1e-4fb5-aef7-9d30ffa39347_3"
        />
      </p>
    </>
  )
}

export default PostContent;
