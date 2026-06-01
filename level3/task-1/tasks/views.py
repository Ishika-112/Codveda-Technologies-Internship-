from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from .forms import RegisterForm

def home(request):
    return render(request, 'home.html')

def register_view(request):
    form = RegisterForm()

    if request.method == 'POST':
        form = RegisterForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard')

    return render(request, 'register.html', {'form': form})

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')
from .forms import TaskForm
from .models import Task

@login_required
def create_task(request):

    if request.method == 'POST':
        form = TaskForm(request.POST)

        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()

            return redirect('dashboard')

    else:
        form = TaskForm()

    return render(request,'task_form.html',{'form':form})


@login_required
def update_task(request,id):

    task = Task.objects.get(id=id,user=request.user)

    if request.method == 'POST':
        form = TaskForm(request.POST,instance=task)

        if form.is_valid():
            form.save()
            return redirect('dashboard')

    else:
        form = TaskForm(instance=task)

    return render(request,'task_form.html',{'form':form})


@login_required
def delete_task(request,id):

    task = Task.objects.get(id=id,user=request.user)

    task.delete()

    return redirect('dashboard')
from .models import Task

@login_required
def dashboard(request):

    tasks = Task.objects.filter(user=request.user)

    return render(
        request,
        'dashboard.html',
        {'tasks': tasks}
    )