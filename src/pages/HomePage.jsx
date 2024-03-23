import { EyeButton, InputElem, InputWrapper, Section, SvgEye, Wrap } from "./styled/main.styled";
import svg from "../img/sprite.svg";

export const HomePage = () => {

  return (
    <Wrap>
      <Section>
        <div>im HomePage</div>

        <InputWrapper>
          <InputElem type="text" />
          <EyeButton>
            <SvgEye>
              <use href={`${svg}#icon-eye`}></use>
            </SvgEye>
          </EyeButton>
        </InputWrapper>
      </Section>
    </Wrap>
  );
};
