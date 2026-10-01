import './App.css';
import UserProfile from './component/UserProfile.jsx';

function App() {
  return (
    <div className="app-layout">
      <h1 className="page-title">User Profiles</h1>

      <UserProfile
        name="Sarah Jenkins"
        role="Frontend Engineer"
        bio="Passionate about building responsive web applications."
        age={28}
        isOnline={true}
        socials={{ github: '@sarahj', twitter: '@sarah_dev' }}
      />

      <UserProfile
        name="Alex Rivera"
        role="UI/UX Designer"
        bio="Designing clean interfaces and user experiences."
        age={32}
        isOnline={false}
        socials={{ github: '@arivera', twitter: '@arivera_design' }}
      />

      <UserProfile
        name="Chen Wei"
        role="Backend Developer"
        bio="Building fast, reliable APIs and data pipelines."
        age={30}
        isOnline={true}
        socials={{ github: '@chenwei', twitter: '@chenwei_dev' }}
      />
    </div>
  );
}

export default App;
