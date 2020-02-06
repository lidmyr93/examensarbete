import React, { useState, useEffect } from "react";
import { ImageContainer } from "./ImageContainer/ImageContainer";
import { ImageGridWrapper, StyledButton } from "./styles";

function ImagesGrid(props) {
  const [limit, setLimit] = useState(3);
  const [renderShowMore, setRenderShowMore] = useState(true);
  const { data, handleModalOpen } = props;
  const device = window.innerWidth < 768 ? "mobile" : "desktop";
  useEffect(() => {
    if (device === "desktop") {
      setLimit(data.length);
      setRenderShowMore(false);
    }
  }, [device, data.length]);
  const onLoadMore = () => {
    setLimit(prevState => prevState + 3);
  };

  const renderImage = () => {
    return data
      .slice(0, limit)
      .map((image, i) => (
        <ImageContainer src={image.imgUrl} key={i} onClick={handleModalOpen} />
      ));
  };
  return (
    <ImageGridWrapper>
      {renderImage()}
      {renderShowMore && (
        <StyledButton onClick={onLoadMore}>Visa mer</StyledButton>
      )}
    </ImageGridWrapper>
  );
}
export default ImagesGrid;
