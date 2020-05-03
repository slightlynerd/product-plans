<template>
  <div class="container">
    <h2 class="text-center text-uppercase font-weight-bold">Product Plans</h2>
    <div class="row">
      <div class="col-12 col-lg-4 mt-4" v-for="(plan, index) in plans" :key="index">
        <div :class="`plan plan-${plan.name} card border-0 shadow-sm`">
          <div class="card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
          </div>
          <div class="card-body">
            <p><i :class="`fa ${plan.icon} plan-icon`" aria-hidden="true"></i></p>
            <p class="plan-price">${{ plan.price }}</p>
            <ul>
              <li
                v-for="feature in plan.features"
                :key="feature.name"
                :class="{'plan-feature': true, 'strike-through': !feature.enabled}"
              >
                {{ feature.name }}
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary text-uppercase btn-lg rounded-pill px-5">Choose</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPlans',
  data() {
    return {
      plans: [
        {
          name: 'bronze',
          icon: 'fa-bread-slice',
          price: 1000,
          features: [
            {
              name: '100 Sample UI Kits',
              enabled: true
            },
            {
              name: 'Easy to use',
              enabled: true
            },
            {
              name: 'All Open files',
              enabled: true
            },
            {
              name: 'Available in all files',
              enabled: false
            },
            {
              name: 'Responsive files',
              enabled: false
            }
          ]
        },
        {
          name: 'gold',
          icon: 'fa-bolt',
          price: 10000,
          features: [
            {
              name: '100 Sample UI Kits',
              enabled: true
            },
            {
              name: 'Easy to use',
              enabled: true
            },
            {
              name: 'All Open files',
              enabled: true
            },
            {
              name: 'Available in all files',
              enabled: true
            },
            {
              name: 'Responsive files',
              enabled: true
            }
          ]
        },
        {
          name: 'silver',
          icon: 'fa-bullseye',
          price: 5000,
          features: [
            {
              name: '100 Sample UI Kits',
              enabled: true
            },
            {
              name: 'Easy to use',
              enabled: true
            },
            {
              name: 'All Open files',
              enabled: true
            },
            {
              name: 'Available in all files',
              enabled: true
            },
            {
              name: 'Responsive files',
              enabled: false
            }
          ]
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.plan-gold {
  background-color: #FFDF00;
}
.plan-bronze {
  background-color: #cd7f32;
}
.plan.silver {
  background-color: #C0C0C0;
}

.plan {
  padding: 25px 0;
  border-radius: 15px;

  .card-header, .card-footer {
    border: 0;
    background-color: transparent;
  }

  .card-header {
    border-radius: 15px 15px 0 0;
  }

  .plan-name {
    text-transform: uppercase;
  }

  .plan-icon {
    font-size: 48px;
  }

  .plan-price {
    font-size: 36px;
    font-weight: bold;
  }

  .plan-feature {
    font-size: 16px;
    font-weight: 500;

    &.strike-through {
      text-decoration: line-through;
    }
  }

  .btn {
    font-weight: bold;
  }

  .card-footer {
    border-radius: 0 0 15px 15px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
