import * as React from "react"
import {getBlogPost} from "../../../data/blogPosts"

const postData = getBlogPost("867f4034-b8da-4bdc-a4e9-902c13b6f83e")

const PostContent = (props) => {
  return (
    <>
      <div className="post-title">
        {postData.title}
      </div>
      <div className="standard-content">
        <p>
          My personalised ads are remarkably accurate at times, and Facebook
          really did not miss the mark with
          suggesting <a href="https://www.rebelbadgestore.com/" target="_blank">Rebel Badges</a> for
          me. The concept is very simple - 53 merit badges to work
          towards and collect, just like Scouts/Guides, but for adults.
        </p>
        <p>
          I was never really into Girlguiding as a child. I was a Brownie for only
          about a month (I’m sure my empty sash is somewhere in the attic), but
          I do remember reading the badge book cover to cover. For some reason,
          bell ringing is what first comes to mind when I think about that book,
          not that I was ever going to pursue that! Now that I’m all
          grown, I love setting myself personal challenges and
          trying new things. Having had a look through the Rebel Badges and the
          clauses to complete for them, I found that some of them were things
          that I already wanted to do one day.
        </p>
        <p>
          Case in point: this blog! I’ve been meaning to set this blog up since
          I got back from my Land’s End to John o’Groats cycle in August 2021,
          but things kept getting in the way; mostly my inability to decide
          what I wanted this blog to look like. The <em>Writer</em> badge has
          been the nudge I needed to get the blog set up, even if it isn't
          exactly how I'd like it to look, and start revisiting my cycle trip,
          as well as transfer some posts from my old study abroad blog.
        </p>
        <p>
          Rebel Badges has a
          supportive and growing <a href="https://www.facebook.com/groups/579616703393446/" target="_blank">online community</a>.
          I've seen a few members categorise the badges, so I have decided to
          do the same, according to the likelihood of me completing the badge. I
          have a busy couple of months coming up, so I'm likely to not start
          in earnest until June.
        </p>
        <p>
          I'm also going to try not to backdate any clauses, with the exception
          of my Land's End to John o'Groats cycle last year counting towards the
          challenge aspect of the <em>Explorer</em> badge. I just don't think
          I'll be able to top it, and have no intention of doing anything that
          physically demanding for some time.
        </p>
        <p>
          This is all about trying new things and challenging myself, so I'm
          going to try to complete as much as I can!
        </p>
        <h3>Definitely</h3>
        <table>
          <tbody>
            <tr>
              <td>🏠 Adulting</td>
              <td>🧗🏼‍♀️ Adventurer</td>
              <td>🧴 Apothecary</td>
              <td>🍰 Baker</td>
              <td>🏕 Camper</td>
            </tr>
            <tr>
              <td>🔪 Chef</td>
              <td>🔐 Codebreaker</td>
              <td>🧶 Craft</td>
              <td>📝 Critic</td>
              <td>🎒 Explorer</td>
            </tr>
            <tr>
              <td>🏋🏼‍♀️ Fitness</td>
              <td>🪴 Indoor Gardener</td>
              <td>📈 Investor</td>
              <td>💬 Linguist</td>
              <td>👛 Money Saver</td>
            </tr>
            <tr>
              <td>🎵 Musician</td>
              <td>🌳 My Roots</td>
              <td>🔥 Outdoor Cooking</td>
              <td>📷 Photographer</td>
              <td>📚 Reader</td>
            </tr>
            <tr>
              <td>👟 Runner</td>
              <td>🛏 Self Care</td>
              <td>🧏🏼‍♀️ Sign Language</td>
              <td>🌌 Stargazer</td>
              <td>🌎 World Traveller</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>✏️ Writer</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h3>Yes, but not yet</h3>
        <table>
          <tbody>
            <tr>
              <td>🎨 Artist</td>
              <td>🤲🏼 Community Service</td>
              <td>🛍 Conscious Consumer</td>
              <td>📒 Diarist</td>
              <td>🔨 DIY</td>
            </tr>
            <tr>
              <td>🌱 Environmentalist</td>
              <td>🎉 Event Planner</td>
              <td>💐 Florist</td>
              <td>💸 Fundraiser</td>
              <td>🌿 Gardener</td>
            </tr>
            <tr>
              <td>🧠 Good Habits</td>
              <td>💭 Mindfulness</td>
              <td>🗣 My Brand</td>
              <td>🎯 My Goals</td>
              <td>🏅 My Talents</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>🧭 Survivor</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h3>Maybe</h3>
        <table>
          <tbody>
            <tr>
              <td>📢 Activist</td>
              <td>🐾 Animal Lover *</td>
              <td>🩰 Dancer</td>
              <td>🪡 Designer</td>
              <td>💐 Florist</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>🖼 Interior Designer</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p style={{fontSize: "0.8em"}}>* This one is really difficult to do without a pet, or friends/family
        nearby to pet-sit for.</p>
        <h3>Never say never, but probably not</h3>
        <table>
          <tbody>
            <tr>
              <td>🚑 Emergency Helper</td>
              <td>💼 Entrepreneur</td>
              <td>🔧 Mechanic</td>
              <td>🚣🏼 Water Sports</td>
            </tr>
          </tbody>
        </table>
        <h3>Highly unlikely</h3>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>🏊🏼‍♀️ Wild Swimmer</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PostContent;
