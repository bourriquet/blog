import * as React from "react"
import PostImageSingle from "../PostImageSingle"

const PostContent = (props) => {
  return (
    <>
      <p>
        Now that inductions are over, yesterday I had my first lectures at
        Universiteit Utrecht. We only do two modules at a time here, which is a
        nice change from Imperial where I’m used to six at a time! However, each
        module here is worth more than double that of Imperial’s. I have
        Geochemical Cycles and Land Degradation until November - not the most
        exciting start to my year abroad as I’m not particularly interested in
        either, but I had very little choice of modules.
      </p>
      <p>
        In order to become a fully-fledged resident in the Netherlands, today I
        had to go activate my Dutch bank account. I looked up the way to the
        bank and expected a ten minute walk... it took me over an hour after
        getting horrendously lost. I also expected a ten minute wait as the bank
        was closed to the rest of the public. How wrong I was... I was there for
        two hours in total and I’d even cut the queue as I’d bumped into a
        flatmate who was already queuing!
      </p>
      <p>
        The bank staff must have pitied us exchange students as they came
        around offering rocket ice lollies. That kind of hospitality would never
        happen in the UK. The wait was worth it as I now have a Dutch bank
        account, which is timely as I am quickly running out of cash and hardly
        anywhere accepts Visa.
      </p>
      <p>
        I’ve also finally found a bike (or <em>fiets</em>). I went for a very
        cheap one as I don’t plan on taking it back to the UK with me. I paid
        65€ for one with a basket and a rear rack... it is a bit clunky and the
        brakes need some attention, but it’ll be fine! I cycled home to find
        that the chain lock I’d bought was broken, so I had to cycle back to the
        shop to exchange it.
      </p>
      <p>
        <PostImageSingle
          caption="My new fiets in all its glory"
          image="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/0f1c4db2-3b2d-498d-85c6-01049e0cd44a_1"
          portrait
        />
      </p>
      <p>
        Apart from the odd time on a Boris bike, I've never really cycled as
        an adult. Feeling confident after a successful cycle back from the bike
        shop, I did a trial cycle to campus. It should have been a 40 minute
        round trip, but I was out for two hours in total. Once you see signs
        saying “Utrecht” with a red line through it, you know you’ve gone wrong.
        The 30C heat also didn’t help!
      </p>
    </>
  )
}

export default PostContent;
