import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>AboutUs</h1>
      <h2>This is AboutUs page of Flavor-Fusion food website!!!.</h2>
      <User name="Rahul Goli (Functional Component)" location="Hyderabad"/>
      <UserClass name="Rahul Goli (Class Component)" location="Hyderabad"/>
    </div>
  );
};

export default AboutUs;
