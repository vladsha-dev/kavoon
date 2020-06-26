import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BasketLogic from '../../data/shop/logic/basket';

const GoodDetailsWizardAddOther = ({
  vm,
  basketStyleSettings,
}) => {
  const [status, checkerStatus] = useState(true);
  const textStatus = status ? 'ти' : 'но';
  const textColor = status ? 'var(--primarycolor)' : 'var(--texticonscolor)';
  const statusWhileInBasket = basketStyleSettings ? 'none' : 'block';
  return (
    <>
      <div className="addition-wrapper">
        <span className="addition-title">
          Дода
          {basketStyleSettings ? "но" : "ти"} в комплект:
        </span>
        <div className="addition-good-wrapper">
          <img
            className="addition-good-img"
            src={vm.picture.src}
            srcSet={vm.picture.srcSet}
          />
          <div className="good-description-checker">
            <span className="good-title">{vm.name}</span>
            <span className="good-amount">
              {vm.count}
              шт.
            </span>
            <span className="good-price">
              {basketStyleSettings ? "Сума: " : ""}
              {vm.price} грн
            </span>
            <label className="good-checkcontainer">
              <input
                className="good-checkbox"
                type="checkbox"
                onChange={() => {
                  checkerStatus(!status);
                  status
                    ? BasketLogic.colectDataOfGood({
                        additionGoodData: { ...vm },
                      })
                    : BasketLogic.colectDataOfGood("deleteAddGood");
                }}
              />
              <span className="good-checkmark" />
              <span className="good-checkcontainer-text">
                Дода
                {textStatus} в комплект
              </span>
            </label>
          </div>
        </div>
        <button
          className="btn-submit"
          type="submit"
          onClick={() => {
            BasketLogic.colectDataOfGood({ id: uuidv4() });
            BasketLogic.addGood();
          }}
        >
          Зробити замовлення
        </button>
      </div>
      <style jsx>
        {`
          .addition-wrapper {
            font-family: Montserrat;
            font-size: 17px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.89px;
            color: var(--texticonscolor);
            margin-top: ${basketStyleSettings ? "0px" : "95px"};
          }
          .addition-good-img {
            box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
            border-radius: 4px;
            object-fit: contain;
            width: 100px;
            height: 100px;
          }
          .addition-title {
            margin-bottom: ${basketStyleSettings ? "14px" : "21px "};
            display: block;
          }
          .good-title {
            padding-bottom: 10px;
          }
          .good-price {
            padding-bottom: 22px;
            letter-spacing: ${basketStyleSettings ? "0.75px" : "none"};
            font-size: ${basketStyleSettings ? "16px" : "17px"};
          }
          .good-checkcontainer {
            display: ${statusWhileInBasket};
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            user-select: none;
            width: fit-content;
            color: ${textColor};
            font-weight: 600;
          }
          .good-checkbox {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          .good-checkmark {
            position: absolute;
            top: 0;
            left: 0;
            width: 25px;
            height: 25px;
            border-radius: 5px;
            border: solid 1.5px var(--primarycolor);
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -1.5px;
            margin-top: 0.5px;
          }
          .good-checkcontainer:hover .good-checkbox ~ .good-checkmark {
            background-color: #eee;
          }
          .good-checkcontainer .good-checkbox:checked ~ .good-checkmark {
            background-color: var(--primarycolor);
          }
          .good-checkcontainer .good-checkmark:after {
            content: "";
            position: absolute;
            display: none;
            background-image: url("/img/checker-tick.svg");
            width: 15px;
            height: 12px;
            object-fit: contain;
          }
          .good-checkcontainer .good-checkbox:checked ~ .good-checkmark:after {
            display: block;
          }
          .good-checkcontainer .good-checkbox:checked ~ .good-checkmark {
            border: none;
            margin-top: 2px;
            margin-left: 0;
          }
          .good-checkcontainer-text {
            color: ${textColor};
            line-height: normal;
            letter-spacing: 0.89px;
            margin-left: 5px;
            margin-top: 5px;
            display: block;
          }
          .btn-submit {
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.75px;
            color: var(--white);
            width: 290px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 0 10px 32px 0 rgba(13, 26, 113, 0.2);
            background-color: var(--primarycolor);
            border: none;
            text-transform: uppercase;
            cursor: pointer;
            outline: none;
            display: ${statusWhileInBasket};
          }
          .addition-good-wrapper {
            display: flex;
            margin-bottom: ${basketStyleSettings ? "2px" : "29px"};
          }
          .good-description-checker {
            display: flex;
            flex-direction: column;
            margin-left: ${basketStyleSettings ? "31px" : "20px"};
          }
          .good-amount {
            display: ${basketStyleSettings ? "block" : "none"};
            margin-bottom: ${basketStyleSettings ? "27px" : "0"};
          }
        `}
      </style>
    </>
  );
};

export default GoodDetailsWizardAddOther;
