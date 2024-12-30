import React, { useState } from "react";
import styles from "../home.module.scss";
import { Image, Modal, Skeleton, Carousel } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function PortafolioContainer({ rightContent }) {
  const [selection, setSelection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [carouselImage, setCarouselImage] = useState(null);

  const showModal = (item) => {
    setModalText(item);
    setIsModalOpen(true);
    setIsLoading(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="projects"
      className={styles.container}
      style={{ scrollMarginTop: 100 }}
    >
      <Modal
        title={<span className={styles.modal_Title}>{modalText?.name}</span>}
        centered
        open={isModalOpen}
        onCancel={() => handleCancel(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        styles={{
          content: {
            backgroundColor: "#202123",
            maxHeight: "600px",
            overflowY: "auto",
          },
          header: { backgroundColor: "#202123", color: "#ffffff" },
        }}
        width={"80%"}
        style={{ color: "#202123 !important" }}
        closeIcon={
          <CloseCircleOutlined style={{ color: "#727273", fontSize: 20 }} />
        }
      >
        <div className={styles.container_modal}>
          <div className={styles.leftSide_modal}>
            {isLoading && (
              <div className={styles.loaderContainer}>
                <Skeleton.Button
                  active
                  size="large"
                  shape="round"
                  block={true}
                  style={{
                    height: 250,
                    backgroundColor: "rgba(173, 173, 173, 0.2)",
                    borderRadius: 10,
                  }}
                />
              </div>
            )}

            <video
              key={modalText?.id}
              className={styles.videoContainer}
              controls={false}
              autoPlay
              muted
              loop
              playsinline
              onWaiting={() => setIsLoading(true)} // Show loader when waiting
              onCanPlay={() => setIsLoading(false)} // Hide loader when can play
              style={{ display: isLoading ? "none" : "block" }} // Hide video when loading
            >
              <source src={modalText?.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className={styles.carouselContainer}>
              <Carousel autoplay arrows speed={2000}>
                {modalText?.img.map((item, index) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          key={index}
                          src={item.url}
                          alt="proyect_images"
                          preview={{ getContainer: "#root" }}
                          className={styles.imgProyect_modal}
                        />
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div className={styles.rightSide_modal}>
            <span className={styles.modal_Title}>
              {rightContent.modalTitle}
            </span>
            <p
              className={styles.description_modal}
              dangerouslySetInnerHTML={{
                __html: modalText?.description,
              }}
            />
            <span className={styles.modal_Title}>
              {rightContent.modalSubTitle}
            </span>

            <div className={styles.skillsModalConatiner}>
              {modalText?.Technologies.map((item, index) => (
                <div key={index} className={styles.skillsModal}>
                  <p style={{ color: "#adadad" }}>{`${item.title}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <h2 className={styles.label}>{rightContent.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rightContent.Services.map((e, index) => (
          <>
            <div
              key={index}
              className={styles.skill_text}
              onClick={() =>
                selection === e.id
                  ? (setSelection(null), showModal(e))
                  : (setSelection(e.id), showModal(e))
              }
            >
              <span>• {e.name}</span>
              <span className={styles.arrow}>→</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
