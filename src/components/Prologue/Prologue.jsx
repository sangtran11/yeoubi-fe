import React from "react";
import "./index.scss";

const prologue_1 =
  "https://lh3.googleusercontent.com/GuX47024jJlS17KA98CBje31GkGsbwckrPQRE5yGtE9ubcAOa225X-ZzeJQ_KPFHNS5e_L654FvfKSraWUY6VSD_EYt7Dr3BwSwHZMZZsg7GO1uvSdzy0zu0mI_ahrUu8zxGvxefdw=w2400";
const prologue_2 =
  "https://lh3.googleusercontent.com/TsV_79O5pWmfXZ7cBqvKZdvScCSNRmaHt13sYIRQvQ1CdyX_sWVC2BFekqpdCMCt3syY-mPk1BSwLJ4osKTFwx6H2Gi1NFh6m_wOaOlJmcVsmKk5b6QJ8jswz7GsI2GZeL7nE7Z3ow=w2400";

const Prologue = () => {
  return (
    <div className="prologue-page">
      <div className="prologue-container">
        <p className="sub-title">(the very first words...)</p>
        <div className="description">
          as a young introvert living in a hectic city, the founder has soon
          come to realize the unruly nature of our modern days. each of us would
          at least struggle once to find the balance between having a socially
          bustling life and securing a calming, personal zone for
          self-composure. most of the time, it is because we are too busy
          running after what we think we should be, while forgetting to nurture
          who we really are.
        </div>
        <div className="description">
          taking this struggle under an introspective point of view, the founder
          has committed to create a pit stop for souls to slow down and amble
          through life instead of rushing through it.
        </div>
        <div className="img-container">
          <img src={prologue_1} alt="prologue_1" />
        </div>
        <p className="sub-title">(where it makes sense...)</p>
        <div className="description">
          the term comes from a korean folktale that says there is a cloud
          crying on the day the love of its life, a fox, gets married to a
          tiger. its sad tears fall down to the earth on that sunny day and
          quickly stop, because soon the cloud realizes how much it wants the
          fox to be happy and have a bright future, even without its presence in
          it. and so, the rain that briefly comes and goes when the sun is still
          shining is called fox rain, sunshower, or yeoubi.
        </div>
        <div className="description">
          yeoubi thus portrays a selfless love, in which we put the desires of
          someone else ahead of ours. but, what if that someone else is no one
          other than our own? how happy it would be when we lay an ultimate love
          on ourselves, with which we can freely let go in times of distress and
          let the teardrops fall without holding back, while keeping our
          sunshine stay as always.
        </div>
        <div className="img-container">
          <img src={prologue_2} alt="prologue_2" />
        </div>
        <p className="sub-title">(when everything comes in...)</p>
        <div className="description">
          putting the pieces together, the founder has established a wholly
          healing experience through a one-stop destination that can bring
          contentment upon both sensory demands and inner self nourishment, and
          named it yeoubi.
        </div>
        <div className="description">
          here at yeoubi, we dedicate the divine essence of everyday life's ups
          and downs into our crafts. our creations are meticulously infused with
          ingredients of the highest quality that can guarantee euphoria to your
          senses. we aim to create a tranquil yet indulging hideout for any
          wandering souls, regardless of whether it’s the beauty or composure
          they are looking for.
        </div>
        <div className="description">
          beyond helping individuals relocate their inner peace through our
          sensual offerings, what we truly want to pursue is to bring out the
          genuine satisfaction whenever you associate yourself with yeoubi.
        </div>
        <div className="description">
          at times, when in need of self-complacency or simply a spot to tuck
          oneself, come to us, yeoubi - your reserved hideout.
        </div>
      </div>
    </div>
  );
};

export default Prologue;
