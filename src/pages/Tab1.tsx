import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonAvatar,
} from "@ionic/react";
import Login from "../components/login/login";
import "./Tab1.css"; // Importa tu archivo de estilos

const Tab1: React.FC = () => {
  return (
    <IonPage className="main-page">
      <IonHeader>
        <IonToolbar>
          <center>
            <IonTitle>Inicio de sesión</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium" className="login-page">
        <IonCard>
          <IonCardContent>
            <center>
              <h1>Bienvenido</h1>
            </center>
            <br />
            <Login />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
