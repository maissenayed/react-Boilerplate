import * as React from "react";

import { IApplicationState } from "../state/store/rootReducer";
import { connect } from "react-redux";

const mapStateToProps = ({}: IApplicationState) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;

const dispatchProps = {};

type DispatchProps = typeof dispatchProps;

type Props = StateProps & DispatchProps;

const component = ({}: Props) => <div>This is my Component</div>;

export default connect(mapStateToProps, dispatchProps)(component);
