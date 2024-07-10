import style from "./style.module.css";
export default function Records() {
  return (
    <main className={style.main} id="records">
      <div className={style.container}>
        <div className="mb-10">
          <h2>231 Records</h2>
          <p className={style.subheadtext}>
            231 Records is an African leading entertainment company
          </p>
        </div>

        <div className={style.display}>
          <div className={style.imagedisplay}>
            <div className={style.image1 + " " + "bg_animation"}></div>
            <div className={style.subimage}>
              <div className={style.image2 + " " + "bg_animation"}></div>
              <div className={style.image3 + " " + "bg_animation"}></div>
            </div>
          </div>
          <div className={style.recordtext}>
            <span>
              <p>City People Entertainment Awards</p>
              <p>2014</p>
            </span>

            <p className={style.bigtext}>Best Record Label of the Year</p>
            <p className={style.smalltext}>
              The label won the aforementioned category at the 2014 City People
              Entertainment Awards
            </p>

            <div className="flex justify-between">
              <span className={style.specialtext}>
                <p>+ 24</p>
                <p>Artistes</p>
              </span>
              <span className={style.specialtext}>
                <p>38</p>
                <p>Albums</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
