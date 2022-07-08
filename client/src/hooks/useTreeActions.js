import { useState, useEffect, useRef } from "react";
import useAPI from "./useAPI";
import { useParams } from "react-router-dom";

const useTreeActions = (treesState) => {
  const builderLoaded = useRef(false);
  const homeLoaded = useRef(false);
  const { id } = useParams();
  const [API] = useAPI();
  const [treesData, setTreesData] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [treeName, setTreeName] = useState("");
  const [alertID, setAlertID] = useState("");
  const [treeData, setTreeData] = useState(false);
  const [oldValue, setOldValue] = useState("");

  // State for tree list component
  const [trees, setTrees] = useState(treesState);

  useEffect(() => {
    if (homeLoaded.current) {
      const run = async () => {
        const trees = await API.getTrees();
        setTreesData(trees);
      };

      run();
    }
  }, []);

  useEffect(() => {
    if (builderLoaded.current) {
      const run = async () => {
        const tree = await API.getTreeByID(id);
        setTreeData(tree);
      };

      run();
    }
  }, []);

  const handleAlert = (e, id) => {
    setAlertID((aid) => id);
    setTreeName((name) => e.target.parentElement.getAttribute("treename"));
    setOverlay(!overlay);
  };

  const handleNewTree = async () => {
    const tree = await API.newTree("62c49e0f57684a9e72992c2d");
    setTreesData([...treesData, tree]);
  };

  const handleDeleteTree = async (e) => {
    const tree = await API.deleteTree(e.target.id);
    setTreesData((treeItems) =>
      treesData.filter((trees) => trees._id !== tree._id)
    );
    setOverlay(!overlay);
  };

  const handleNameEdition = (e) => {
    e.target.removeAttribute("readOnly");
    setOldValue((value) => e.target.value);
  };

  const handleInputChange = (e) => {
    const index = e.target.getAttribute("data-index");
    const temp = [...trees];
    temp[index].name = e.target.value;
    setTrees(temp);
  };

  const handleNameUpdate = async (e) => {
    e.target.setAttribute("readOnly", null);
    if (oldValue !== e.target.value) {
      const tree = await API.updateTree(e.target.id, e.target.value, oldValue);
    }
  };

  return {
    treesData,
    handleAlert,
    treeName,
    alertID,
    handleNewTree,
    handleDeleteTree,
    overlay,
    setTreeName,
    setOverlay,
    treeData,
    builderLoaded,
    homeLoaded,
    oldValue,
    handleNameEdition,
    trees,
    handleInputChange,
    handleNameUpdate,
  };
};

export default useTreeActions;
