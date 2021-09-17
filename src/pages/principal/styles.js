import { makeStyles } from "@material-ui/core";
import imagemFundo from "../../Assets/ImagemFundo/Ferias.png";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    height: "98vh",
    minWidth: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${imagemFundo})`,
    backgroundRepeat: "no-repeat",
  },
  containerBotoes: {
    display: "flex",
    flexDirection: "row",
  },
  botao: {
    backgroundColor: "#4091D1",
    color: "white",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#6E8FBE",
    },
  },
  data: {
    width: "300px",
  },
}));

export default useStyles;
