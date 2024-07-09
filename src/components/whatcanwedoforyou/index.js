import style from "./style.module.css";
import AnimatedSection from "../animatedSection";
export default function WhatCanWeDoForYou() {
  return (
    <AnimatedSection>
      <section className={style.main}>
        <div className={style.container}>
          <h3>What can we do for you?</h3>
          <p className="subtext">
            We are ready to work on a project of any complexity, whether it's
            commercial or residential
          </p>

          <div className={style.formfield}>
            <div className={style.input}>
              <input name="name" placeholder="Name *" />
              <input name="Email" placeholder="Email *" />
              <select>
                <option disabled>Reason for contacting *</option>
              </select>
              <input name="Phone" placeholder="Phone" />
            </div>
            <textarea placeholder="Message" />
            <small>* indicate required field</small>
            <p className={style.submit}>Submit</p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
