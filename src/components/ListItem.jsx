/* eslint-disable react/prop-types */
import { useState } from "react";
import svg from "../img/sprite.svg";

import {
  Card,
  SvgPin,
  SvgStar,
  TechItem,
  TechList,
  TechWrapper,
  SpanPrice,
  ImgWrapper,
  HeartButton,
  Online,
  Avatar,
  NameWrapper,
  InfoWrapper,
  InfoItem,
  Underline,
  MoreButton,
  Reviews,
  ReviewsList,
  RevWrap,
  NameLogo,
  RevName,
  RaitingWrap,
  Raiting,
  Button,
} from "./styled/Li.styled";
import { useDispatch } from "react-redux";
import { addFav, removeFav, toggleFav } from "../redux/slice";
import { PopUp } from "./PopUp";

const ListItem = ({ one }) => {
  const [ismore, setIsmore] = useState(false);
  // const [like, setLike] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();

  const originalDate = new Date(one.birthday);
  const today = new Date();
  const originalYear = originalDate.getFullYear();
  const todayYear = today.getFullYear();
  const differenceInYears = todayYear - originalYear;

  // коли буде готова логінка, замінити на дані зі стейта
  const isLoggedIn = true;

  const { isLiked } = one;

  // click on heart for logged user or guest
  const toggleFavorite = (itemId) => {
    console.log(itemId);
    dispatch(toggleFav(itemId));
    
    isLiked ? dispatch(removeFav(one)) : dispatch(addFav(one));
  };

  const openPopUp = () => {
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
  };

  // for detailes in card
  const showMore = () => {
    setIsmore(!ismore);
  };

  const characters = one.characters.join(", ");
  const rating = Math.round(one.rating * 10) / 10;
  return (
    <Card>
      <TechWrapper>
        <TechList>
          <TechItem>
            <SvgPin>
              <use href={`${svg}#icon-mapPin`}></use>
            </SvgPin>
            {one.location}
          </TechItem>
          <TechItem>
            <SvgStar>
              <use href={`${svg}#icon-star`}></use>
            </SvgStar>
            Rating: {rating}
          </TechItem>
          <TechItem>
            Price / 1 hour: <SpanPrice>{one.price_per_hour}&#36;</SpanPrice>
          </TechItem>
        </TechList>

        <HeartButton
          onClick={
            isLoggedIn ? () => toggleFavorite(one.id) : () => openPopUp()
          }
        >
          {isLiked ? (
            <use href={`${svg}#icon-heart-active`}></use>
          ) : (
            <use href={`${svg}#icon-heart`}></use>
          )}
        </HeartButton>
      </TechWrapper>
      <ImgWrapper>
        <Online></Online>
        <Avatar src={one.avatar_url} alt="avatar" />
      </ImgWrapper>
      <div>
        <NameWrapper>
          <p>Nanny</p>
          <h2>{one.name}</h2>
        </NameWrapper>

        <InfoWrapper>
          <InfoItem>
            Age: <Underline>{differenceInYears}</Underline>
          </InfoItem>
          <InfoItem>Experience: {one.experience}</InfoItem>
          <InfoItem>Kids Age: {one.kids_age}</InfoItem>
          <InfoItem>Characters: {characters}</InfoItem>
          <InfoItem>Education: {one.education}</InfoItem>
        </InfoWrapper>

        <p>{one.about}</p>
        {!ismore && (
          <MoreButton type="button" onClick={showMore}>
            Read more
          </MoreButton>
        )}
        {ismore && (
          <Reviews>
            <ReviewsList>
              {one.reviews.map((item, index) => (
                <li key={index}>
                  <RevWrap>
                    <NameLogo>{item.reviewer.charAt(0)}</NameLogo>
                    <div>
                      <RevName>{item.reviewer}</RevName>
                      <RaitingWrap>
                        <SvgStar>
                          <use href={`${svg}#icon-star`}></use>
                        </SvgStar>{" "}
                        <Raiting>{rating}</Raiting>
                      </RaitingWrap>
                    </div>
                  </RevWrap>
                  <p>{item.comment}</p>
                </li>
              ))}
            </ReviewsList>
            <Button type="button">Make an appointment</Button>
          </Reviews>
        )}
      </div>
      {popUp && <PopUp closePopUp={closePopUp} />}
    </Card>
  );
};

export default ListItem;
