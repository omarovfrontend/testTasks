import React from 'react';
import style from './MainPage.module.css';
import parent from '../../images/parent.png';
import child from '../../images/child.png';
import patient from '../../images/patient.png';

function MainPage() {
  return (
    <div className={style.page}>
      <div className={style.page__info}>
        <h1 className={style.page__title}>А вдруг СМА?</h1>
        <h2 className={style.page__subtitle}>Выберите, кто Ваш пациент:</h2>
      </div>

      <div className={style.page__people}>
        <div className={style.page__peopleParent}>
          <h3 className={style.page__peopleParentTitle}>Взрослый</h3>
          <img src={parent} alt="ParentImg" />
          <p className={`${style.description}`}>
            Менее тяжелые формы СМА могут возникать и
            диагностироваться в зрелом возрасте.
          </p>
          <p className={`${style.description}`}>
            По сравнению с СМА у детей, СМА у взрослых
            может иметь более легкие симптомы, но без
            патогенетической терапии пациенты со СМА 2-3
            типа неуклонно теряют двигательные навыки.
          </p>
          <p className={`${style.description}`}>
            По сравнению с СМА в детстве, течение СМА у
            взрослых может быть более коварным и трудным
            для распознавания.
          </p>
        </div>

        <div className={style.page__peopleChild}>
          <h3 className={style.page__peopleChildTitle}>Ребенок</h3>
          <img src={child} alt="ChildImg" />
          <p className={`${style.description}`}>
            Ребенок, плохо удерживающий голову, когда ему
            придают сидячее положение, с вялыми движениями
            нижних конечностей или с трудом тянущийся к
            предметам, но при этом с осмысленным и ярким
            взглядом, улыбающийся и социально активный,
            вызывает настороженность в отношении наличия
            СМА.
          </p>
          <p className={`${style.description}`}>
            Младенцам со СМА необходимо экстренное
            направление к специалисту, ранняя диагностика и
            обеспечение терапией, спасающей жизнь, поскольку
            эти мотонейроны очень быстро подвергаются
            дегенерации при прогрессировании заболевания.
          </p>
        </div>
      </div>

      <div className={style.symptoms}>
        <h3 className={style.symptoms__title}>
          Сообщает ли один из ваших пациентов о следующих симптомах?
          {' '}
          <span className={style.symptoms__more}>(нажмите на любую иконку и узнайте больше)</span>
        </h3>
      </div>

      <div className={style.patient__information}>
        <img src={patient} alt="PatientInfo" />
        <p className={style.patient__text}>Взрослый</p>
        <span className={`${style.icon} ${style.icon1}`} />
        <span className={`${style.plus} ${style.plus1}`} />
        <span className={`${style.icon} ${style.icon2}`} />
        <span className={`${style.plus} ${style.plus2}`} />
        <span className={`${style.icon} ${style.icon3}`} />
        <span className={`${style.plus} ${style.plus3}`} />
        <span className={`${style.icon} ${style.icon4}`} />
        <span className={`${style.plus} ${style.plus4}`} />
        <span className={`${style.icon} ${style.icon5}`} />
        <span className={`${style.plus} ${style.plus5}`} />
        <span className={`${style.icon} ${style.icon6}`} />
        <span className={`${style.plus} ${style.plus6}`} />
        <span className={`${style.icon} ${style.icon7}`} />
        <span className={`${style.plus} ${style.plus7}`} />
        <span className={`${style.icon} ${style.icon8}`} />
        <span className={`${style.plus} ${style.plus8}`} />
      </div>
    </div>
  );
}

export default MainPage;
