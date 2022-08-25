function Navbar() {
    return (`
    <div id="logo-div">
    <div id="menu-icon"><i class="fa-solid fa-bars"></i></div>
    <div id="logo">
        <img src="https://clockify.me/assets/images/brand-assets/clockify-logo.png" alt="" />
    </div>
</div>
<div id="info">
    <div id="user-name">
        Manoj Kumar's workspace <i class="fa-solid fa-sort-down"></i>
        <div id="dropdown">
            <div id="flex1">
                <div>WORKSPACES</div>
                <div>Manage</div>
            </div>
            <div id="flex1">
                <div>Manoj kumar's workspace</div>
                <div>Active</div>
            </div>
        </div>
    </div>
    <div id="upgrade">UPGRADE</div>
    <div class="vertical_dotted_line"></div>
    <div id="question">
        <img src="https://app.clockify.me/assets/nav-icons/help.svg" alt="" />
    </div>
    <div class="vertical_dotted_line"></div>

    <div id="notification">
        <img src="https://app.clockify.me/assets/nav-icons/notification.svg" alt="" />
    </div>
    <div class="vertical_dotted_line"></div>

    <div id="name-short">MK</div>
</div>
    `)
};

function Sidebar() {
    return `
    <div class="one-div-flex">
    <div class="icon"><i class="fa-regular fa-clock"></i></div>
    <div class="hide-show"> TIME TRACKER</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt=""></i></div>
    <div class="hide-show"> CALENDER</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<p class="hide-show">ANALYZE</p>
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
<p class="hide-show">MANAGE</p>

<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt=""></div>
    <div class="hide-show"> PROJECTS</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt=""></i></div>
    <div class="hide-show"> TEAM</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="">
        </i></div>
    <div class="hide-show">CLIENTS</div>
    <div class="hide" class="hide-show"><i class="fa-solid fa-grip-vertical"></i></div>
</div>
<div class="one-div-flex">
    <div class="icon"><img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt=""></i></div>
    <div class="hide-show"> TAGS</div>
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

</div>
    `
};

export { Navbar, Sidebar }