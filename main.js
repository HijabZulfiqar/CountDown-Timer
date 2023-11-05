const day = document.getElementById('day');
      const hour = document.getElementById('hour');
      const minute = document.getElementById('minute');
      const seconds = document.getElementById('seconds');

      function updateClock() {
        const now = new Date();

        const currentDay = now.getDate().toString().padStart(2, '0');
        const currentHour = now.getHours().toString().padStart(2, '0');
        const currentMinute = now.getMinutes().toString().padStart(2, '0');
        const currentSeconds = now.getSeconds().toString().padStart(2, '0');

        day.innerText = currentDay;
        hour.innerText = currentHour;
        minute.innerText = currentMinute;
        seconds.innerText = currentSeconds;
      }

      // Update the clock initially and then every second
      updateClock();
      setInterval(updateClock, 1000);  