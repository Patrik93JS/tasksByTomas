import { FC } from "react";
import { useState } from "react";
import styles from "./SideBar.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIdGroup } from "@/store/slices/idGroupToDo";
import { setFilter } from "@/store/slices/filterSlice";
import { MdDelete } from "react-icons/md";
import { useModal } from "@/hooks/useModal";
import { createPortal } from "react-dom";
import { DeleteGroupModal } from "./DeleteGroupModal";

type Props = {
  title: string | null;
  idGroup: number;
};

export const SideBarGroup: FC<Props> = ({ title, idGroup }) => {
  const dispatch = useAppDispatch();
  const titleLetter = title?.charAt(0).toUpperCase();
  const selectedGroupId = useAppSelector(({ idGroupToDo }) => idGroupToDo.idGroup);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { isOpen, open, close } = useModal();

  const handleClick = () => {
    dispatch(setIdGroup(idGroup));
    dispatch(setFilter(""));
  };

  const isSelected = selectedGroupId === idGroup;

  return !isOpen ? (
    <button
      className={`${isSelected ? styles.groupSelected : styles.sidebar} group`}
      onClick={handleClick}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      {titleLetter}
      <span className={`${styles.sidebarTooltip} group-hover:scale-100`}>{title}</span>

      {showDeleteButton && isSelected && (
        <button className="absolute pt-16" onClick={open}>
          <MdDelete size={24} color="red" />
        </button>
      )}
    </button>
  ) : (
    createPortal(<DeleteGroupModal close={close} title={title} selectedId={selectedGroupId} />, document.body)
  );
};
