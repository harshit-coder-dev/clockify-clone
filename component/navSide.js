let navegabar = ()=>{
    return ` <div id="logo-div">
    <div id="menu-icon"><i class="fa-solid fa-bars"></i></div>
    <div id="logo">
        <img src="https://clockify.me/assets/images/brand-assets/clockify-logo.png" alt="" />
    </div>
</div>
<div id="info">
    <div  class="showUser" id="user-name">
    </div>
    <div class="dropdown" id="drop">
        <div id="flex1">
            <div>WORKSPACES</div>
            <div style="color:#58c6f8">Manage</div>
        </div>
        <div id="flex1">
            <div class="showUser"></div>
            <div style="color:rgb(9, 220, 9)"><i style="margin-right: 15px;color:rgb(9, 220, 9)"
                    class="fa-solid fa-check"></i>Active</div>
        </div>
    </div>
    <div id="upgrade"><a href="upgrad.html">UPGRADE</a></div>
    <div class="vertical_dotted_line"></div>
    <div id="question">
        <img src="https://app.clockify.me/assets/nav-icons/help.svg" alt="" />

    </div>
    <div class="dropdown2" id="drop2">
        <P>Documentation</P>
        <P>Tutorials</P>
        <P>Contact</P>
    </div>
    <div class="vertical_dotted_line"></div>

    <div id="notification">
        <img src="https://app.clockify.me/assets/nav-icons/notification.svg" alt="" />
    </div>
    <div class="dropdown3" id="drop3">
        <div>NOTIFICATION</div>
        <div>no new notification</div>
    </div>
    <div class="vertical_dotted_line"></div>

    <div id="name-short">

    </div>
    <div class="dropdown4">
        <p class="showUser"></p>
        
        <hr>
        <p> Profile Setting</p>
        <div id="dark">
            <p>Dark theme</p>
            <div><label class="switch">
                    <input id="check" type="checkbox">
                    <span class="slider round"></span>
                </label></div>
        </div>
        <p>Download apps</p>
        <div id="chat">
            <p>Try chat app</p>
            <p style="background-color:rgb(10, 234, 10); color:white;padding:5px;">NEW</p>
        </div>
        <hr>
        <p>Log Out</p>
    </div>
</div>`;
}

let SideBar = ()=>{
    return `<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt=""></i></div>
    <div class="hide-show"><a href="timetracker.html">TIME TRACKER</a></div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt=""></i></div>
    <div class="hide-show">CALENDER</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<p class="hide-show gray marginLeft">ANALYZE</p>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt=""></div>
    <div class="hide-show"> DASHBOARD</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt=""></i></div>
    <div class="hide-show"> REPORTS</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<p class="hide-show gray marginLeft">MANAGE</p>

<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt=""></div>
    <div class="hide-show"><a href="project.html">PROJECTS</a></div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt=""></i></div>
    <div class="hide-show"><a href="team.html">TEAM</a></div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="">
        </i></div>
    <div class="hide-show" id="clt"><a href="client.html">CLIENTS</a></div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt=""></i></div>
    <div class="hide-show"> <a href="tags.html">TAGS</a></div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>


<div>

    <div class="one-div-flex " id="one">
        <div class="icon"><i class="fa-solid fa-angle-down gray"></i></div>
        <div class="hide-show gray" id="show"> Show More</div>
    </div>


    <div id="more" class="hide1">

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/timesheet.svg" alt=""></i>
            </div>
            <div class="hide-show">TIMESHEET</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/Kiosk.svg" alt=""></i>
            </div>
            <div class="hide-show "> kIOSKS</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/scheduling.svg" alt=""></i>
            </div>
            <div class="hide-show gray">SCHEDULE</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/expenses.svg" alt=""></i>
            </div>
            <div class="hide-show gray">EXPENSES</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/timeOff.svg" alt=""></i>
            </div>
            <div class="hide-show gray">TIME OFF</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/activity.svg" alt=""></i>
            </div>
            <div class="hide-show gray">ACTIVITY</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/approvals.svg" alt=""></i>
            </div>
            <div class="hide-show gray">APPROVALS</div>
        </div>

        <div class="one-div-flex">
            <div class="icon"><img style="color:#c5c5c5;"
                    src="https://app.clockify.me/assets/nav-icons/invoices" alt=""></i></div>
            <div class="hide-show gray">INVOICES</div>

        </div>
    </div>

</div>`;
}


export {navegabar , SideBar}