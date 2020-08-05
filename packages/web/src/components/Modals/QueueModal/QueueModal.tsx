import React, { useRef } from "react";
import { withTranslation } from "i18n";
import { Menu, X } from "react-feather";
import Scrollbars from "react-custom-scrollbars";

import {
  QueueModalContainer,
  QueueModalHeaderContainer,
  QueueModalHeaderText,
  QueueModalHeaderButton,
  QueueModalItemsContainer,
  QueueModalItemContainer,
  QueueModalItemAvatar,
  QueueModalItemsDetails,
  QueueModalItemEpisode,
  QueueModalItemPodcast,
} from "./QueueModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const QueueModal = ({ handleQueue, t }: any) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleQueue());

  return (
    <QueueModalContainer ref={ref}>
      <QueueModalHeaderContainer>
        <QueueModalHeaderText>{t("up-next")}</QueueModalHeaderText>
        <QueueModalHeaderButton type="button" onClick={() => {}}>
          {t("clear-all")}
        </QueueModalHeaderButton>
      </QueueModalHeaderContainer>

      <Scrollbars
        universal
        autoHide
        autoHideTimeout={100}
        autoHideDuration={100}
      >
        <QueueModalItemsContainer>
          <QueueModalItemContainer>
            <QueueModalItemAvatar src={avatar} />

            <QueueModalItemsDetails>
              <QueueModalItemEpisode>
                403 - Return of Yokai
              </QueueModalItemEpisode>
              <QueueModalItemPodcast>99% Invisible</QueueModalItemPodcast>
            </QueueModalItemsDetails>

            <Menu
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("menu clicked")}
            />
            <X
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("X clicked")}
            />
          </QueueModalItemContainer>

          <QueueModalItemContainer>
            <QueueModalItemAvatar src={avatar} />

            <QueueModalItemsDetails>
              <QueueModalItemEpisode>
                403 - Return of Yokai
              </QueueModalItemEpisode>
              <QueueModalItemPodcast>99% Invisible</QueueModalItemPodcast>
            </QueueModalItemsDetails>

            <Menu
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("menu clicked")}
            />
            <X
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("X clicked")}
            />
          </QueueModalItemContainer>

          <QueueModalItemContainer>
            <QueueModalItemAvatar src={avatar} />

            <QueueModalItemsDetails>
              <QueueModalItemEpisode>
                403 - Return of Yokai
              </QueueModalItemEpisode>
              <QueueModalItemPodcast>99% Invisible</QueueModalItemPodcast>
            </QueueModalItemsDetails>

            <Menu
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("menu clicked")}
            />
            <X
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("X clicked")}
            />
          </QueueModalItemContainer>

          <QueueModalItemContainer>
            <QueueModalItemAvatar src={avatar} />

            <QueueModalItemsDetails>
              <QueueModalItemEpisode>
                403 - Return of Yokai
              </QueueModalItemEpisode>
              <QueueModalItemPodcast>99% Invisible</QueueModalItemPodcast>
            </QueueModalItemsDetails>

            <Menu
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("menu clicked")}
            />
            <X
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("X clicked")}
            />
          </QueueModalItemContainer>

          <QueueModalItemContainer>
            <QueueModalItemAvatar src={avatar} />

            <QueueModalItemsDetails>
              <QueueModalItemEpisode>
                403 - Return of Yokai
              </QueueModalItemEpisode>
              <QueueModalItemPodcast>99% Invisible</QueueModalItemPodcast>
            </QueueModalItemsDetails>

            <Menu
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("menu clicked")}
            />
            <X
              size={16}
              strokeWidth={1.5}
              color="#B7B7B7"
              onClick={() => console.log("X clicked")}
            />
          </QueueModalItemContainer>
        </QueueModalItemsContainer>
      </Scrollbars>
    </QueueModalContainer>
  );
};

QueueModal.getInitialProps = async () => ({ namespacesRequired: ["player"] });

export default withTranslation("player")(QueueModal);
