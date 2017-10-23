import React from 'react';
import Link from 'gatsby-link'

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

export const mailFolderListItems = (
  <div className="navList">
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Indoor Cameras" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <StarIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Outdoor Cameras" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Lenses" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Software" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="WebUI" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Downloads" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div className="navList">
    <ListItem button>
      <ListItemIcon>
        <MailIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="How does an IP Camera work?" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Unpacking" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="First Steps" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Power over Ethernet" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Powerline" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Direct Connection" />
    </ListItem>
  </div>
);

class NestedList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="navList">
        <ListItem button>
          <ListItemIcon>
            <ReportIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText inset primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <ReportIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ReportIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText inset primary="Starred" />
          </ListItem>
        </Collapse>
      </div>
    );
  }
}
