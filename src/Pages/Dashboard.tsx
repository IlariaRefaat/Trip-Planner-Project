import { apiCalls } from "../api/api";
import { CardActivity } from "../Components/core/CardActivity";
import { CardLocation } from "../Components/core/CardLocation";
import { Container } from "../Components/core/Container";
import { Typography } from "../Components/core/Typography";
import { SearchEngineAutocomplete } from "../Components/widgets/SearchEngineAutocomplete";
import { Swiper } from "../Components/widgets/Swiper";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <Container>
      <Typography
        text="Enjoy the best things to do, in every destination!"
        variant="h1"
      />
      <SearchEngineAutocomplete />
      <div className={styles.dashboardContainer}>
        <Typography text="Locations" variant="h2" />
        <Swiper>
          {apiCalls.getLocations().map((location) => (
            <a key={location.id} href={`/location/${location.id}`}>
              <CardLocation location={location} key={location.id} />
            </a>
          ))}
        </Swiper>

        <Typography text="Activities" variant="h2" />

        <Swiper>
          {apiCalls.getActivities().map((activity) => (
            <a key={activity.id} href={`/activity/${activity.id}`}>
              <CardActivity activity={activity} />
            </a>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
