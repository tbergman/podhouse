import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Home from "src/modules/App/Home/Home";
import Subscriptions from "src/modules/App/Subscriptions/Subscriptions";
import Favorites from "src/modules/App/Favorites/Favorites";

import Provider from "src/components/Provider/Provider";

import AuthModal from "src/components/Modals/AuthModal/AuthModal";
import SettingsModal from "src/components/Modals/SettingsModal/SettingsModal";
import QueueModal from "src/components/Modals/QueueModal/QueueModal";
import RateModal from "src/components/Modals/RateModal/RateModal";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";
import { useQueueContext } from "src/context/Queue/Queue";
import { useRateContext } from "src/context/Rate/Rate";

const App = () => {
  const [, auth] = useAuthContext();
  const [settings] = useSettingsContext();
  const [queue] = useQueueContext();
  const [rate, handleRate] = useRateContext();

  const renderAuthModal = () => {
    if (auth === true) {
      return <AuthModal />;
    }
    return null;
  };

  const renderSettingsModal = () => {
    if (settings.matches("open")) {
      return <SettingsModal />;
    }
    return null;
  };

  const renderQueueModal = () => {
    if (queue.matches("open")) {
      return <QueueModal />;
    }
    return null;
  };

  const renderRateModal = () => {
    if (rate.matches("open")) {
      return <RateModal handleRate={handleRate} />;
    }
    return null;
  };

  return (
    <Provider>
      <AppContainer>
        <Dashboard>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Dashboard>
        <Header />
        <Player />
        <Menu />
      </AppContainer>
    </Provider>
  );
};

export default App;
