import ColoredBox from '../../components/ColoredBox';
import mockStagiaires from '../../assets/mockStagiares';

const Dashboard = () => {
  const totalStagiaires = mockStagiaires.length;
  const stagiairesSup50 = mockStagiaires.filter(stagiaire => stagiaire.moyenne > 10).length;
  const stagiairesInf50 = totalStagiaires - stagiairesSup50;

  return (
    <div className="flex justify-center items-center flex-wrap m-10">
      <ColoredBox color="bg-blue-500" number={totalStagiaires} title="Nombre de stagiaires" />
      <ColoredBox color="bg-green-500" number={stagiairesSup50} title="Stagiaires avec résultat > 50 %" />
      <ColoredBox color="bg-red-500" number={stagiairesInf50} title="Stagiaires avec résultat < 50 %" />
    </div>
  );
};

export default Dashboard;
