// mixins.js (또는 styles.js)

// 변수 선언
export const tagColor = "#d7fa00";
export const gray = "rgb(160, 160, 160)";

// 믹스인 함수 정의
export const flexMixin = (direction = "row", justify = "flex-start", align = "stretch", gap = "0", wrap = "nowrap") => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
`;

export const fontMixin = (size, weight = 400) => `
  font-size: ${size};
  font-weight: ${weight};
`;
