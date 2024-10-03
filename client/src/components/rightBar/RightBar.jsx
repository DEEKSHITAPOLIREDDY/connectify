import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Deekshi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVe9ZsJulXqGygSNg_-6puyH7nUnqer4AJJA&s"
                alt=""
              />
              <span>Joshi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Deekshi</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpuD7L7s3cuPdWkf12Ya5CNl_KZCt9qwUzw&s"
                alt=""
              />
              <p>
                <span>Joshi</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3bnyCPIqKpHGaQpH9zvncxDzmJ7SSTZ1Wg&s"
                alt=""
              />
              <p>
                <span>Abhi</span> changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4q_FCoUJOehX8BUXcmzbLF_7Doehr-nvWtw&s"
                alt=""
              />
              <p>
                <span>Ram</span> changed their cover picture
              </p>
            </div>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2aIMpOIYZKSLNRQnDOXtna8n7eRumIbYfA&s"
                alt=""
              />
              <div className="online" />
              <span>varshi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmNJyev8IUQrSjARp5EHzeRnOAlkqo_WTLQ&s"
                alt=""
              />
              <div className="online" />
              <span>manohar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3W7WCOs0ABN4BKR0wPAvgf8VgbOvzUG81w&s"
                alt=""
              />
              <div className="online" />
              <span>bharathi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvIdte4tZ_iX6Rku8maxSrSCWAf6Sl-ML5Q&s"
                alt=""
              />
              <div className="online" />
              <span>dp</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFXkvqv3qgGohgPVz0NhC6wk5UnIPaD_bDQ&s"
                alt=""
              />
              <div className="online" />
              <span>abhinav</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
