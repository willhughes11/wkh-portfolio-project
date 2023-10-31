import React, { Component } from "react";
import Head from "next/head";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Head>
                    <title>William Hughes - Trading Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="w-full min-h-screen">
                </main>
            </div>
        )
    }
}

Dashboard.layout = "L2";
export default Dashboard